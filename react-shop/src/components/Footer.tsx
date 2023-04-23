import cx from "clsx";
import styles from "./Footer.module.css";

interface ModeProps {
  selectedMode: boolean;
}

export default function Footer({ selectedMode }: ModeProps) {
  return (
    <footer className={cx(styles.footer, { [styles.light]: !selectedMode })}>
      <div>Footer</div>
      <div>Copyright © 2022 Zero Base</div>
    </footer>
  );
}
