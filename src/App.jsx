
export default function App() {
  return (
    <>
      <div className="flex-col">
        <p>
          These are the progress bars
        </p>
        <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{ "--value": 70 }}>70%</div>
      </div>
    </>
  );
}

