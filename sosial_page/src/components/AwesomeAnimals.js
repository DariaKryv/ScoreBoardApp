export default function AwesomeAnimals() {
  return (
    <div>
      {["Chicken", "Sloth", "Porcupine", "Killer whale", "Velociraptor"].map(
        (animal, index) => {
          return (
            <p key={index}>
              Awesomeness level {index + 1} : {animal}
            </p>
          );
        }
      )}
    </div>
  );
}
