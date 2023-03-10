import Image from "next/image";
export default function Avatar() {
    return(
        <div className={`w-12 h-12 rounded-full overflow-hidden`}>
            <Image alt='profile-avatar' src="https://images.unsplash.com/photo-1591084728795-1149f32d9866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"></Image>
        </div>
    );
}