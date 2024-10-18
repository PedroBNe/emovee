'use client'

import { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

interface Item {
  id: string;
  content: string;
}

interface Column {
  name: string;
  items: Item[];
}

interface Columns {
  [key: string]: Column;
}

const initialData: Columns = {
  cancelado: {
    name: "Cancelado",
    items: [{ id: '1', content: 'Ajuste de servidores' }],
  },
  aguardando: {
    name: "Aguardando",
    items: [{ id: '2', content: 'Implantação CRM' }],
  },
  emAtraso: {
    name: "Em atraso",
    items: [{ id: '3', content: 'Relatório trimestral' }],
  },
  desenvolvimento: {
    name: "Desenvolvimento",
    items: [{ id: '4', content: 'Criação de landing page' }],
  },
  entregue: {
    name: "Entregue",
    items: [{ id: '5', content: 'Entrega de relatório' }],
  },
};

export default function Leads() {
  const [data, setData] = useState<Columns>(initialData);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceColumn = data[source.droppableId];
    const destColumn = data[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];

    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);

    setData({
      ...data,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  };

  return (
    <div className="w-full bg-gray-100 flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Projetos</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className='w-full flex flex-col bg-white'>
          <div className='border-b-1 mb-5 p-5'>
            Todos os Projetos e Status
          </div>
          <div className="min-h-[300px] p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full">
            {Object.entries(data).map(([columnId, column]) => (
              <Droppable key={columnId} droppableId={columnId}>
                {(provided: any) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="border-1 p-4"
                  >
                    <h2 className="text-xl font-semibold text-center mb-4">
                      {column.name}
                    </h2>
                    {column.items.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided: any) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-blue-100 rounded-lg p-4 mb-2 shadow-sm cursor-pointer"
                          >
                            {item.content}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}
