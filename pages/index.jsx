import Todo from "@/organisms/todo/Todo";
import { Box } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
	return (
		<Box mx={"6%"} my={"2%"}>
			<Todo />
			<Link href='/test/hola-mundo'>Test link</Link>
		</Box>
	);
}
