export interface IAceAuction {
    id: string;
    title: string;
    artist: string;
    category: string;
    estimatedValue: number;
    currentBid: number;
    imageUrl: string;
    endTime: string;
    progress?: number;
    timeRemaining?: string;
  }