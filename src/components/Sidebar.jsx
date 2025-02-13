import { Mic, Users, Handshake, Trophy, MessageSquare, Image, FileText, BarChart, Calendar } from "lucide-react";

const SidebarItem = ({ icon: Icon, title, active }) => {
  return (
    <div
      className={`flex items-center p-3 rounded-lg cursor-pointer hover:bg-gray-700 transition ${
        active ? "bg-white text-black font-semibold" : ""
      }`}
    >
      <Icon className="w-5 h-5 mr-3" />
      {title}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-96 bg-[#2E382E] text-white h-[730px] p-5">
      <div className="flex flex-col items-center">
        <img
          src="/Images/Group-53.png"
          alt="Profile"
          className="rounded-full w-16 h-16"
        />
        <h2 className="mt-2 text-lg font-semibold">Profile Name</h2>
        <p className="text-sm text-gray-400">Channel Name</p>
        <p className="text-xs text-gray-500">Address</p>
        <p className="text-xs mt-1">Connection: 100+ | Subscription: 100+</p>
      </div>
      <div className="mt-5 space-y-2">
        <SidebarItem icon={Calendar} title="Host and Event" />
        <SidebarItem icon={Mic} title="Invite Guest for Podcast" />
        <SidebarItem icon={Handshake} title="Paid Collaborations" active />
        <SidebarItem icon={Users} title="Free Collaborations" />
        <SidebarItem icon={Trophy} title="Challenge Creation" />
        <SidebarItem icon={MessageSquare} title="Ask Question" />
        <SidebarItem icon={Image} title="Share a Photo" />
        <SidebarItem icon={FileText} title="Document Sharing" />
        <SidebarItem icon={BarChart} title="Create a Poll" />
      </div>
    </div>
  );
};

export default Sidebar;
