import styles from "./UserAvatar.module.css";

type UserAvatarProps = {
  src?: string;
  name?: string;
};

function UserAvatar({ src, name }: UserAvatarProps) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={src} alt={`Avatar of ${name}`} />
      <span>{name}</span>
    </div>
  );
}

export default UserAvatar;
