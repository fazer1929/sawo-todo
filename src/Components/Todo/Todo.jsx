import React, { useState } from "react";
import styles from "./Todo.module.css";
import cx from "classnames";
import { FaRegTrashAlt } from "react-icons/fa";
function Todo({ task, completed, idx, toggleCompleted, deleteTodo }) {
	const [complete, setComplete] = useState(completed);
	return (
		<div className={styles.outerContainer}>
			<div
				className={styles.container}
				onClick={() => {
					setComplete(!complete);
					toggleCompleted(idx);
				}}
			>
				<p
					className={cx(styles.task)}
					style={
						complete
							? { textDecoration: "line-through" }
							: { textDecoration: "none" }
					}
				>
					{task}
				</p>
			</div>
			<span className={styles.delete} onClick={() => deleteTodo(idx)}>
				<FaRegTrashAlt size={20} />
			</span>
		</div>
	);
}

export default Todo;
