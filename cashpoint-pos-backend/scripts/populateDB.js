// File: /backend/scripts/populateDB.js
import mongoose from 'mongoose';
import User from '../models/userModel';
import Product from '../models/productModel';
import Transaction from '../models/transactionModel';

const populateDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/cashpoint', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to database.');

    // Sample Users
    const users = [
      { name: 'John Doe', email: 'john@example.com', password: '123456' },
      { name: 'Jane Smith', email: 'jane@example.com', password: '654321' },
    ];
    const insertedUsers = await User.insertMany(users);
    console.log('Sample users added.');

    // Sample Products
    const products = [
      { name: 'Laptop', price: 1000, quantity: 50 },
      { name: 'Smartphone', price: 500, quantity: 100 },
    ];
    const insertedProducts = await Product.insertMany(products);
    console.log('Sample products added.');

    // Sample Transactions
    const transactions = [
      { user: insertedUsers[0]._id, product: insertedProducts[0]._id, quantity: 1, total: 1000 },
      { user: insertedUsers[1]._id, product: insertedProducts[1]._id, quantity: 2, total: 1000 },
    ];
    await Transaction.insertMany(transactions);
    console.log('Sample transactions added.');

    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
};

populateDB();