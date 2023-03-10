import Image from "next/image";
export default function FriendsAvatar(props) {
    let width = 'w-12';
    let height = 'h-12';
    if(props.size === 'lg'){
          width = 'w-36';
          height = 'h-36';
    }
    return(
        <>
            <div className={`${width} ${height} rounded-full overflow-hidden`}>
                <Image alt='friends-avatar' src={props.url}></Image>
            </div>
        </>
    );
}