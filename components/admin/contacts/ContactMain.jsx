"use client";
import moment from "moment";
import React, { useState } from "react";

// Modal component from MainEvents.jsx, simplified for our needs
const Modal = ({ open, onClose, title, children }) => {
  if (!open) return null;
  return (
    <div className="fixed z-50 inset-0 flex items-center backdrop-blur-md justify-center bg-black bg-opacity-50">
      <div className="bg-white goodScroll p-6 max-h-[90vh] overflow-y-scroll rounded shadow-lg w-[600px]">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
};

function ContactMain({ contacts }) {
  const [selectedContact, setSelectedContact] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (contact) => {
    setSelectedContact(contact);
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-blue-800 text-center mb-6">
        Contact Messages
      </h1>
      {console.log("contacts", contacts)};
      {contacts.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse">
            <thead className="bg-blue-50">
              <tr className="text-blue-800">
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Message</th>
                <th className="px-4 py-3 text-left">IP Address</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact._id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">
                    {moment(contact.createdAt).format("MMM DD, YYYY")}
                    <div className="text-xs text-gray-500">
                      {moment(contact.createdAt).fromNow()}
                    </div>
                  </td>
                  <td className="px-4 py-3 font-medium">{contact.name}</td>
                  <td className="px-4 py-3">
                    <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
                      {contact.email}
                    </a>
                  </td>
                  <td className="px-4 py-3">
                    <div className="truncate max-w-[200px]">
                      {contact.message}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href={`https://www.ip-tracker.org/locator/ip-lookup.php?ip=${contact.ip}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {contact.ip}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => handleViewDetails(contact)}
                      className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center text-gray-500 py-20">
          <p className="text-2xl mb-2">No messages yet</p>
          <p>Contact messages from users will appear here</p>
        </div>
      )}

      {/* Contact Details Modal */}
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Contact Details"
      >
        {selectedContact && (
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-500">Submitted On</h3>
              <p>{moment(selectedContact.createdAt).format("MMMM DD, YYYY [at] h:mm A")}</p>
              <p className="text-sm text-gray-600">{moment(selectedContact.createdAt).fromNow()}</p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-500">Name</h3>
              <p className="text-lg font-medium">{selectedContact.name}</p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-500">Email</h3>
              <a
                href={`mailto:${selectedContact.email}`}
                className="text-blue-600 hover:underline"
              >
                {selectedContact.email}
              </a>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-500">IP Address</h3>
              <a
                href={`https://www.ip-tracker.org/locator/ip-lookup.php?ip=${selectedContact.ip}`}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                {selectedContact.ip}
              </a>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-500">Message</h3>
              <div className="p-4 bg-gray-50 rounded-md whitespace-pre-wrap">
                {selectedContact.message}
              </div>
            </div>
            
            <div className="flex justify-between pt-4">
              <button
                onClick={() => window.location.href = `mailto:${selectedContact.email}`}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Reply via Email
              </button>
              
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default ContactMain;