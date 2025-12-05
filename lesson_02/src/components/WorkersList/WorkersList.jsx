import styles from "./WorkersList.module.css"
function WorkersList() {
	const workersList2 = [
		{ id: 111, name: 'Іванов', salary: 10000 },
		{ id: 112, name: 'Петров', salary: 20000 },
		{ id: 113, name: 'Сидоров', salary: 50000 },
	]
	return (
		<>
			<h2>Задача 4</h2>
			<ol>
				{workersList2.map((worker) => (
					<li key={worker.id}>{worker.name}: {worker.salary}</li>
				))}
			</ol>
		</>
	)
}

export default WorkersList;