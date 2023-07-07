// eslint-disable-next-line react/prop-types
export const Stats = ({ items }) => {
  return !items.length ? <NoStatsAdded /> : <StatsAdded items={items} />;
};

const NoStatsAdded = () => {
  return (
    <p className="stats">
      <em>Start adding some items to your packing list 🚀</em>
    </p>
  );
};

// eslint-disable-next-line react/prop-types
const StatsAdded = ({ items }) => {
  // eslint-disable-next-line react/prop-types
  const numItems = items.length;
  // eslint-disable-next-line react/prop-types
  const packedItems = items.filter((item) => item.packed).length;
  const porcetage = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {porcetage === 100
          ? "You got everything! Ready to go"
          : `You have ${numItems} item on your list, and you already packed ${packedItems} (${porcetage}%)`}
      </em>
    </footer>
  );
};
