import { useRouter } from "next/router";
import Card from "../../components/Card";
import { profile } from "../../components/FollowCard";
import FriendsAvatar from "../../components/FriendsAvatar";

export default function profileName() {
  const router = useRouter();
  const root = router.query.profileName;
  let imgPath = "";
  profile.map((item) => {
    if (root === item.name) imgPath = item.profileImg;
  });
  return (
    <div className="flex mt-4 max-w-6xl mx-auto gap-6">
      <Card noPadding={true}>
        <div className="relative">
          <div className="h-36 overflow-hidden flex justify-center items-center">
            <img src="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"></img>
          </div>

          <div className="absolute top-16 left-4">
            <FriendsAvatar url={imgPath} size={"lg"} />
          </div>

          <div className="p-4">
            <h1 className="ml-36 text-3xl font-bold">{root}</h1>
          </div>
          <div className="flex gap-8 justify-center">
            <a>Timeline</a>
            <a>About</a>
            <a>Album</a>
            <a>Friends</a>
          </div>
        </div>
      </Card>
    </div>
  );
}
