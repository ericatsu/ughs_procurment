import Card from "./components/cards";


const Dashboard = () => {
  return (
    <div>
        <div className="flex justify-around mx-auto max-w-5xl flex-wrap mt-4 gap-4">
          <Card cardName="Total Items" quantity={47} cardDesc="Medical equipment available" />
          <Card cardName="Total Order" quantity={10} cardDesc="Number of items ordered" />
          <Card cardName="Categories" quantity={20} cardDesc="Equipment categories" />
          <Card cardName="To Procure" quantity={48} cardDesc="Items to procure" />
        </div>
    </div>
  );
};

export default Dashboard;
