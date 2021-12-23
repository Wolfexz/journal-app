
export const limitText = ( text, limit ) => {
    
    return text.slice(0, limit) + (text.length > limit ? "..." : "");
	
}