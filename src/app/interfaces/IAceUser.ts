import { IArtwork } from "./IArtwork";
import { INotification } from "./INotification";
import { IWonAuction } from "./IWonAuction";

export interface IAceUser {
    id: string;
    username?: string;
    fullName?: string;
    name?: string;
    email: string;
    profilePictureUrl?: string;
    role?: 'artist' | 'buyer' | 'investor';
    bio?: string;
    walletAddress?: string;
    verified?: boolean;
    revenueSharesOwned?: number;
    artworksUploaded?: number;
    artworksBidded?: number;
    artworksWon?: number;
    totalSpent?: number;
    totalEarned?: number;
    joinedDate?: string;
    ownedArtworks?: IArtwork[];
    wonAuctions?: IWonAuction[];
    notifications?: INotification[];
  }