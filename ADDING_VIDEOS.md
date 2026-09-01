# Adding YouTube Videos to Cyber Forge

## How to Find YouTube Video IDs

### Method 1: From YouTube URL
- **Full URL**: `https://www.youtube.com/watch?v=jaeK7AX094s`
- **Video ID**: `jaeK7AX094s` (the part after `v=`)

### Method 2: Short URL
- **Short URL**: `https://youtu.be/jaeK7AX094s`
- **Video ID**: `jaeK7AX094s`

### Method 3: Embedded URL
- **Embed**: `https://www.youtube.com/embed/jaeK7AX094s`
- **Video ID**: `jaeK7AX094s`

## Popular Cybersecurity YouTube Channels

### Professor Messer
- Channel: https://www.youtube.com/@professormesser
- Specializes in: CompTIA certifications, Networking, Security+
- Best for: Structured, exam-focused content

### NetworkChuck
- Channel: https://www.youtube.com/@NetworkChuck
- Specializes in: Networking, Linux, practical demonstrations
- Best for: Quick explanations and practical examples

### John Hammond
- Channel: https://www.youtube.com/@JohnHammond010
- Specializes in: Security, Hacking, Cybersecurity Career
- Best for: Real-world security scenarios and career guidance

## Steps to Add Videos

1. **Find a Video**: Search for educational content on YouTube (e.g., "CompTIA Network+ subnetting")

2. **Get the Video ID**: Copy the ID from the URL (the characters after `v=`)

3. **Update videos.ts**: Edit `src/data/videos.ts` and replace the `youtubeId` value:
   ```typescript
   {
     id: 'subnet-1',
     youtubeId: 'YOUR_VIDEO_ID_HERE',  // Replace this
     title: 'Video Title',
     creator: 'Creator Name',
     duration: 'HH:MM',
     keyPoints: ['Point 1', 'Point 2']
   }
   ```

4. **Test**: The video should appear embedded in the course!

## Example Videos to Try

Here are some well-known cybersecurity educational videos you can try:

### Networking
- Search: "CompTIA Network+ fundamentals"
- Creator: Professor Messer

### Subnetting
- Search: "subnetting explained"
- Creator: NetworkChuck

### Security Basics
- Search: "cybersecurity fundamentals"
- Creator: Professor Messer or John Hammond

## Troubleshooting

- **Video shows "unavailable"**: The video may have been deleted or made private. Try a different video.
- **Video doesn't play**: Make sure you've copied the correct YouTube ID (11 characters).
- **Can't find videos**: Try searching on YouTube with keywords like "beginner", "tutorial", "fundamentals", etc.

## Notes
- All videos embedded use YouTube's embedded player (standard video player)
- Videos must be publicly available (not private or unlisted)
- Respect copyright and YouTube's Terms of Service
- Always verify videos are appropriate educational content before adding
