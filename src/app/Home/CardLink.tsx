import { motion } from 'framer-motion';
import Button from '@/components/utils/Button';
import Link from 'next/link';
import 'aos/dist/aos.css';
import RocketIcon from '@/assets/rocket-icon';

export default function CardLink() {
  return (
    <div className="w-full min-h-[38em] flex flex-col gap-16 items-center justify-center mb-6">
      <div className="w-[90%] xl:w-[60%] h-full flex items-center justify-center">
        <div
          className="w-full lg:w-[90%] h-full lg:h-[500px] flex flex-col gap-5 justify-center items-center"
          data-aos="fade-up"
        >
          <motion.div
            className="w-full h-full rounded-lg bg-white flex flex-col items-center justify-around shadow-2xl py-3"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <RocketIcon width={28} height={28} color="#1e65ff" />
            <p className="text-center m-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores nisi amet ad obcaecati, quas laborum
              sequi est molestias nemo explicabo soluta esse, voluptates dolore, facere atque quam neque unde enim!
            </p>
            <p className="text-center m-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores nisi amet ad obcaecati, quas laborum
              sequi est molestias nemo explicabo soluta esse, voluptates dolore, facere atque quam neque unde enim!
            </p>
            <p className="text-center m-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores nisi amet ad obcaecati, quas laborum
              sequi est molestias nemo explicabo soluta esse, voluptates dolore, facere atque quam neque unde enim!
            </p>
            <Link href="/fale-especialista">
              <Button>Fale com um Especialista</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
