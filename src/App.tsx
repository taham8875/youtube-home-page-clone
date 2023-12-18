import CategoryPills from "./components/CategoryPills";
import PageHeader from "./layout/PageHeader";
import VideoGridItems from "./layout/VideoGridItems";

const App = () => {
  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <aside>Sidebar</aside>
        <div className="grid grid-cols-1">
          <main className="flex flex-col gap-4 p-4 max-w-[calc(100vw-16rem)] sm:max-w-[calc(100vw-12rem)] mx-auto">
            <CategoryPills />
            <VideoGridItems />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
