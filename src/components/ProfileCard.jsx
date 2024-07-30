const ProfileCard = ({ name, description }) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "500px",
          background: "yellow",
          padding: "24px",
        }}
      >
        <div>
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
            height={"100px"}
          />
        </div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    );
  };
  
  export default ProfileCard;
  