import { useUser } from "@clerk/nextjs";
import Link from "next/link";

const Success = () => {
	const { user } = useUser();
	return <Link href={`/${user?.username ?? ""}`}>Go to portal</Link>;
};

export default Success;
