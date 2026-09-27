# AI Outreach Platform

A full-stack AI-powered outreach and communication platform built with Go Fiber on the backend and Next.js on the frontend.

## Features

- Manage contacts and prospects
- Generate AI outreach messages using OpenAI
- Create campaigns for segmented audiences
- Track campaign delivery and recipients
- Ready for future WhatsApp, SMS, and payment integrations

## Tech Stack

- Backend: Go + Fiber
- Frontend: Next.js + React + TypeScript
- AI: OpenAI API

## Project Structure

- `backend/` - Go Fiber API
- `frontend/` - Next.js dashboard

## Quick Start

### 1. Backend

```bash
cd backend
cp .env.example .env
# add your OPENAI_API_KEY
go mod tidy
go run main.go
```

### 2. Frontend

```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

Then open:

- Frontend: http://localhost:3000
- Backend API: http://localhost:3001/api/health

## Example API

- `GET /api/contacts`
- `POST /api/contacts`
- `POST /api/ai/draft`
- `GET /api/campaigns`
- `POST /api/campaigns`
- `POST /api/campaigns/:id/send`

## Default admin/seed data

The app loads a few sample contacts and campaigns so you can test without extra setup.

## Roadmap

- User authentication and authorization
- PostgreSQL persistence
- WhatsApp / SMS integration
- Stripe payments
- Team dashboards and role management
