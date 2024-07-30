import ProfileCard from "./components/ProfileCard";

const App = () => {
  const detail = [
    {
      name: "Anish  Bhakta joshi",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Ipsum has been the industrys standard dummy text eversince the 1500s, when",
    },
    {
      name: "Test Test",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Ipsum has been the industrys standard dummy text eversince the 1500s, when",
    },
    {
      name: "Ram Shyam",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Ipsum has been the industrys standard dummy text eversince the 1500s, when",
    },
    {
      name: "Ashok Budha",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Ipsum has been the industrys standard dummy text eversince the 1500s, when",
    },
    {
      name: "Anish  Bhakta joshi",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Ipsum has been the industrys standard dummy text eversince the 1500s, when",
    },
    {
      name: "Anish  Bhakta joshi",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Ipsum has been the industrys standard dummy text eversince the 1500s, when",
    },
    {
      name: "Anish  Bhakta joshi",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Ipsum has been the industrys standard dummy text eversince the 1500s, when",
    },
  ];
  return (
    <div style={{ display: "flex ", gap: "10px" }}>
      {detail.map((item, index) => {
        console.log(index, item);
        return (
          <ProfileCard
            key={index}
            name={item.name}
            description={item.description}
          />
        );
      })}
    </div>
  );
};

export default App;
