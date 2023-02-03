import mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb+srv://Clemson:22042004@game-start-data.x5wknnw.mongodb.net/?retryWrites=true&w=majority'),
  },
];