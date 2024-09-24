import img from '@/assets/post-img.png';




const sampleMessages = [
    {
      id: 1,
      type: "text",
      content: "Hello, how are you?",
      sentByMe: false,
      createdAt: "2023-08-09T10:15:30Z",
      sender: "Alice",
    },
    {
      id: 2,
      type: "text",
      content: "I'm good, thank you! How about you?",
      sentByMe: true,
      createdAt: "2024-08-09T10:16:00Z",
      sender: "Me",
    },
    {
      id: 3,
      type: "image",
      content: {
        name: "beautiful-scenery.jpg",
        data: img,
        type: "image/jpeg",
      },
      sentByMe: false,
      createdAt: "2024-08-09T10:17:00Z",
      sender: "Alice",
    },
    {
      id: 4,
      type: "video",
      content: {
        name: "sample-video.mp4",
        data: "https://example.com/path-to-video.mp4",
        type: "video/mp4",
      },
      sentByMe: true,
      createdAt: "2024-08-09T10:18:00Z",
      sender: "Me",
    },
    {
      id: 5,
      type: "file",
      content: {
        name: "document.pdf",
        data: "https://example.com/path-to-file.pdf",
        type: "application/pdf",
      },
      sentByMe: false,
      createdAt: "2024-08-09T10:19:00Z",
      sender: "Alice",
    },
  ];
  
  export default sampleMessages;
  