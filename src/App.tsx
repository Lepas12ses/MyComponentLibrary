import Visibility from "./shared/ui/Visibility";
import useVisibility from "./shared/ui/Visibility/useVisibility";

function App() {
	const { isVisible } = useVisibility("synced");
	console.log(isVisible);

	return (
		<>
			<Visibility.Provider name='synced'>
				<Visibility.Trigger
					render={({ toggle }) => (
						<>
							<button
								onClick={toggle}
								className='bg-blue-200 px-2 py-1 rounded-md'
							>
								Click me
							</button>
						</>
					)}
				/>
			</Visibility.Provider>
			<Visibility.Provider name='synced'>
				<Visibility.Target
					render={isVisible =>
						isVisible && (
							<div className='bg-stone-300 p-3 rounded-md flex flex-col gap-2'>
								<h1 className='text-xl font-bold'>Что-то</h1>
								<p>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Laboriosam, at?
								</p>
							</div>
						)
					}
				/>
			</Visibility.Provider>
		</>
	);
}

export default App;
