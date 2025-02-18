import { useState } from "react";
import { Menu, X, Mic, Users, Handshake, Trophy, MessageSquare, Image, FileText, BarChart, Calendar } from "lucide-react";

const SidebarItem = ({ icon: Icon, title, active }) => {
  return (
    <div
      className={`flex items-center p-3 rounded-lg cursor-pointer hover:bg-gray-700 transition ${
        active ? "bg-white text-black font-semibold" : ""
      }`}
    >
      <Icon className="w-5 h-5 mr-3" />
      <span className="md:inline">{title}</span>
    </div>
  );
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-96 bg-[#2E382E] text-white h-full p-5 flex-col">
        <div className="flex flex-col items-center">
          <img src="/Images/Group-53.png" alt="Profile" className="rounded-full w-16 h-16" />
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

      {/* Mobile Sidebar */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-[#2E382E] text-white p-3 flex items-center justify-between">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <h2 className="text-lg font-semibold">Profile Name</h2>
      </div>

      {/* Sidebar Drawer for Mobile */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-60 bg-[#2E382E] text-white h-full p-5 flex flex-col z-50 overflow-scroll">
          <button onClick={() => setIsOpen(false)} className="absolute top-3 right-3 text-white">
            <X className="w-6 h-6" />
          </button>
          <div className="flex flex-col items-center mt-10">
            <img src="/Images/Group-53.png" alt="Profile" className="rounded-full w-16 h-16" />
            <h2 className="mt-2 text-lg font-semibold">Profile Name</h2>
            <p className="text-sm text-gray-400">Channel Name</p>
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
      )}
    </>
  );
};

export default Sidebar;
