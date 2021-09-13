import Axios from "axios";

interface ApiParameter {
	url: string;
	type: string;
	param?: any;
}

interface ApiHeaders {
	"Content-Type": string;
	"Access-Control-Allow-Origin": string;
	"Access-Control-Allow-Methods": string;
	"Access-Control-Allow-Headers": string;
}

const api = ({ url, type = "get", param }: ApiParameter) => {
	const headers: ApiHeaders = {
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
		"Access-Control-Allow-Headers":
			"Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization",
	};

	// TODO: 추후에 타입 정의를 다시 해야 할 필요성이 있음
	// @ts-ignore
	return Axios({
		method: type,
		url: `${url}`,
		headers,
		data: param,
	});
};

export default api;
