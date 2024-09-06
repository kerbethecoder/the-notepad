import '@/ui/globals.css';
import { viga } from '@/ui/fonts';
import { styles } from '@/ui/style';

export default function Button({ title, hex, icon }) {
  const bgColor = styles[hex];

  return (
    <button
      className={`${viga.className} ${bgColor} ${styles.flexCenter} custom-btn h-14 w-56 gap-2 transition duration-300 hover:scale-105`}
    >
      {title} {icon}
    </button>
  );
}
