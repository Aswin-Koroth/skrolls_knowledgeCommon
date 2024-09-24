import React from 'react'
import UserMsgList from '@/components/Librarian/UserMsgList';
import MessageBox from '@/components/Librarian/MessageBox';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/Librarian/resizable';

const LibrarianChat = () => {
  return (
    <ResizablePanelGroup direction="horizontal" className="rounded-lg border">
    <ResizablePanel
      defaultSize={25}
      maxSize={50}
      minSize={25}
      className="max-md:mr-5"
    >
      <UserMsgList />
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel className="max-md:hidden">
      <MessageBox />
    </ResizablePanel>
  </ResizablePanelGroup>
  )
}

export default LibrarianChat
