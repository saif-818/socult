import Avatar from "./Avatar";
import Card from "./Card";
export default function VideoPost() {
  return (
    <Card>
      <div className="flex gap-3">
        <div>
          <Avatar />
        </div>
        <div>
          <p>
            <a className="font-semibold">
              John Smith shared a <a className="text-socialBlue">photo</a>
            </a>
          </p>
          <p className="text-gray-500 text-sm">2 hours ago</p>
        </div>
      </div>
      <div>
        <p className="my-3 text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <iframe
          width="530"
          height="315"
          autoplay
          src="https://youtube.com/embed/czry9aZBvQY?autoplay=0"
        ></iframe>
      </div>
    </Card>
  );
}
