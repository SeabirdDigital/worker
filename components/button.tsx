import { JSX } from "preact";

export default function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            class={`flex items-center h-full gap-2.5 p-4 text-xl leading-none border-2 ${
                props.class ?? ""
            }`}
        />
    );
}
