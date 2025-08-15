#!/bin/bash

# Real Estate Web Application - Start Script

echo "========================================="
echo "  Real Estate Web Application"
echo "========================================="
echo ""
echo "This script will help you get started with the application."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install Node.js version 18 or later."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v)
echo "✅ Node.js version: $NODE_VERSION"

# Check if npm is installed
if ! command -v npm &> /dev/null
then
    echo "❌ npm is not installed. Please install npm."
    exit 1
fi

echo "✅ npm is installed"

# Install dependencies
echo ""
echo "Installing dependencies..."
npm install

# Check if installation was successful
if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies. Please check the error messages above."
    exit 1
fi

echo ""
echo "✅ Dependencies installed successfully!"

# Start development server
echo ""
echo "Starting development server..."
echo "The application will be available at: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm run dev