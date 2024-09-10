'use server';

import { cookies } from "next/headers";

export default async function Cookie({ name, value }: { name: string, value: string }) {
  try {
    const cookieName = cookies().has(name);
    const cookieValue = cookies().has(value);
    
    if(cookieName && cookieValue) {
      return false
    }
  } catch {
    const cookieStore = cookies();
  
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7); 
  
    cookieStore.set(name, value, {
      httpOnly: true,
      path: '/',
      expires: expirationDate,
    });
  }
}
