import { createSlice, nanoid } from "@reduxjs/toolkit";

const setLogs = (logsList) =>
	localStorage.setItem("ld_logs", JSON.stringify(logsList));

const initialState = {
	logs:
		localStorage.getItem("ld_logs") !== null
			? JSON.parse(localStorage.getItem("ld_logs"))
			: [],
};

export const logsSlice = createSlice({
	name: "logs",
	initialState,
	reducers: {
		addLog: (state, action) => {
			const log = {
				id: nanoid(),
				date: action.payload.date,
				name: action.payload.name,
				title: action.payload.title,
				body: action.payload.body,
				isFavorite: false,
			};
			state.logs.push(log);

			setLogs(state.logs);
		},
		deleteLog: (state, action) => {
			state.logs = state.logs.filter((log) => log.id !== action.payload);

			setLogs(state.logs);
		},
		toggleFavorite: (state, action) => {
			state.logs = state.logs.map((log) => {
				if (log.id === action.payload) {
					if (log.isFavorite === false) return { ...log, isFavorite: true };
					if (log.isFavorite === true) return { ...log, isFavorite: false };
				}
				return log;
			});

			setLogs(state.logs);
		},
		editLog: (state, action) => {
			const editedLogId = action.payload.id;
			state.logs = state.logs.map((log) => {
				if (log.id === editedLogId) {
					return { ...log, ...action.payload };
				}
				return log;
			});

			setLogs(state.logs);
		},
	},
});

export const { addLog, deleteLog, toggleFavorite, editLog } = logsSlice.actions;
export default logsSlice.reducer;