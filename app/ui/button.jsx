import '@/ui/globals.css';
import { viga } from '@/ui/fonts';
import { styles } from '@/ui/style';

export default function Button({ title, hex }) {
  const bgColor = styles[hex];

  return (
    <button
      className={`${viga.className} ${bgColor} custom-btn w-56 h-14 transition duration-300 ease-in-out hover:scale-105`}>
      {title}
    </button>
  );
}
