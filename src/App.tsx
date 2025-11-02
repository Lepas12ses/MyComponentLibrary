import Visibility from "./shared/ui/Visibility";

function App() {
	return (
		<Visibility.Provider>
			<Visibility.Trigger>
				<button className='bg-blue-200 px-2 py-1 rounded-md'>Click me</button>
			</Visibility.Trigger>
			<Visibility.Target>
				<div className='bg-stone-300 p-3 rounded-md flex flex-col gap-2 w-fit'>
					<h1 className='text-xl font-bold'>Что-то</h1>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Laboriosam, at?
					</p>
				</div>
			</Visibility.Target>
		</Visibility.Provider>
	);
}

export default App;
