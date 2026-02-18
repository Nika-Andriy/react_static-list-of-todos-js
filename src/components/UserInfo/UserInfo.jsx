// Add the required props
export const UserInfo = ({ user, users = [], userId }) => {
  const currentUser = user || users.find(u => u.id === userId) || null;

  return (
    currentUser && (
      <a className="UserInfo" href={`mailto:${currentUser.email}`}>
        {currentUser.name}
      </a>
    )
  );
};
