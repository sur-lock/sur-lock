import React, { ReactElement } from "react";
import { setUser, useAppDispatch, useAppSelector } from "store";

export default function MainPage(): ReactElement {
	const loginedUser = useAppSelector(state => state.auth.user);
	const dispatch = useAppDispatch();

	return (
		<>
			<h1>A501 어쩌다 블록체인 조입니다</h1>
			<button
				type="button"
				onClick={() =>
					dispatch(setUser({ name: "홍길동", wallet: "dafnjason4516" }))
				}
			>
				로그인
			</button>
		</>
	);
}
