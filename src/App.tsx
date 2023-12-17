import CategoryPills from "./components/CategoryPills";
import PageHeader from "./layout/PageHeader";

const App = () => {
  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <aside>Sidebar</aside>
        <CategoryPills />
      </div>
    </div>
  );
};

export default App;
