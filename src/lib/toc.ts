export function extractHeadings(content: string) {
    const headingRegex = /<h([1-6])[^>]*>(.*?)<\/h\1>/g;
    const headings = [];
    let match;
  
    while ((match = headingRegex.exec(content)) !== null) {
      const level = parseInt(match[1]);
      const text = match[2].replace(/<[^>]*>/g, ''); // Remove any HTML tags inside heading
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      
      headings.push({
        level,
        text,
        id
      });
    }
  
    return headings;
  }
  
  export function addIdsToHeadings(content: string) {
    return content.replace(
      /<h([1-6])[^>]*>(.*?)<\/h\1>/g,
      (match, level, text) => {
        const id = text.replace(/<[^>]*>/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return `<h${level} id="${id}">${text}</h${level}>`;
      }
    );
  }