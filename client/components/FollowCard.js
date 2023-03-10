import Card from "./Card";
import FriendsAvatar from "./FriendsAvatar";
import Link from "next/link";

export const profile = [{name: 'Diana Amber', profileImg: 'https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'},
              {name: 'Cris Harris', profileImg: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'},
              {name: 'Brian Walton', profileImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'},
              {name: 'Olivia Steward', profileImg: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'},
              {name: 'Sophia Page', profileImg: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80'},
             ];    
export function FollowCard(){

    return(
        <Card>
            <h1 className="font-semibold text-lg">Who to Follow</h1>
            { 
                profile.map(item => 
                   <div>
                        <div className="grid gap-5 grid-cols-1 py-4">
                            <div className="flex gap-3">
                                <FriendsAvatar url={item.profileImg}/>
                                <div>
                                    <h2>{item.name}</h2>
                                    <div className="flex gap-2">
                                        <Link href={`/profile/${item.name}`}><button onClick={() => alert('Friend Added Successfully')} className="text-socialBlue">Add friend</button></Link>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            )}
       </Card>
    );
}