@echo off
title Real Estate Web Application

echo =========================================
echo   Real Estate Web Application
echo =========================================
echo.
echo This script will help you get started with the application.
echo.

REM Check if Node.js is installed
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js version 18 or later.
    echo    Download from: https://nodejs.org/
    pause
    exit /b 1
)

REM Get Node.js version
for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
echo ✅ Node.js version: %NODE_VERSION%

REM Check if npm is installed
npm -v >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed. Please install npm.
    pause
    exit /b 1
)

echo ✅ npm is installed

REM Install dependencies
echo.
echo Installing dependencies...
call npm install

REM Check if installation was successful
if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies. Please check the error messages above.
    pause
    exit /b 1
)

echo.
echo ✅ Dependencies installed successfully!

REM Start development server
echo.
echo Starting development server...
echo The application will be available at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev

pause