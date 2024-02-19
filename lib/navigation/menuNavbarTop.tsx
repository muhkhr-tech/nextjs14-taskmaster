import { HiListBullet, HiOutlineClipboardDocument, HiOutlineClipboardDocumentCheck, HiOutlineClipboardDocumentList, HiOutlineDocumentText } from "react-icons/hi2";

export default function MenuNavbarBottom() {
    return [
      {
        name: 'PROJECTS',
        path: '/projects',
        icon: <HiOutlineClipboardDocument size={23}/>
      
      },
      {
        name: 'DO',
        path: '/todos',
        icon: <HiOutlineClipboardDocument size={23}/>
      
      },
      {
        name: 'DOING',
        path: '/doing',
        icon: <HiOutlineClipboardDocumentList size={23}/>
      },
      {
        name: 'DONE',
        path: '/done',
        icon: <HiOutlineClipboardDocumentCheck size={23} />
      },
      {
        name: 'HISTORY',
        path: '/history',
        icon: <HiOutlineDocumentText size={23}/>
  
      }
    ]
  }