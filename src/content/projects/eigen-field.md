---
title: "RAG Agriculture Knowledge Assistant"
publishedAt: 2026-01-02
description: "A smart document retrieval system that converts farm reports and research papers into an interactive form for building an intelligence base. The retrieval-augmented generation system is used to ask the system any question the users wish to know with the answer being referenced and accurate."
slug: "rag-agriculture-assistant"
image: 
  src: "/post_img/eigen-field/rag-chat-interface.webp"
  alt: "RAG Chat Interface"
img_logo: 
  src: "/post_img/eigen-field/eigen-field.webp"
  alt: "RAG Agriculture Assistant"
github: "git@github.com:Abdellatif404/EIGEN_FIELD.git"
website: "#"
technologies:
  - name: "FastAPI"
    route: "/svg/fastapi.svg"
  - name: "Python"
    route: "/svg/python.svg"
  - name: "ChromaDB"
    route: "/svg/chromadb.svg"
  - name: "Docker"
    route: "/svg/docker.svg"
---

## RAG Agriculture Knowledge Assistant

A smart document retrieval system that converts farm reports and research papers into an interactive form for building an intelligence base. The retrieval-augmented generation system is used to ask the system any question the users wish to know with the answer being referenced and accurate.

## Overview

![Eigen Field Dashboard](/post_img/eigen-field/eigenfield-dashboard.webp)


![Eigen Field Chat](/post_img/eigen-field/eigenfield-chat-page.webp)

### Key Features

- **Document Upload/Indexing**: Automatically indexes the PDF files, breaks the documents into chunks of text, and generates vector representations for semantic searching.
- **Natural Language Queries**
        Ask questions in natural, everyday language and receive answers that take context into consideration
- **Source Attribution** : Each answer contains references to the source documents, making them traceable and verifiable.
- **Vector Similarity Search**: Based on ChromaDB for efficient semantic document searches by meaning, not keyword
- **Integration of LLM**: Using Ollama for local inference, preserving privacy and avoiding API charges
- **Document Management**: See, list, and delete indexed documents via clean API

### Technical Architecture

**Core Components:
- **PDF Ingestion Pipeline**: PDF extraction → Text chunking (500 chars with 50 char overlap) → Embedding generation → ChromaDB storage
- **Retrieval Engine**: Query embedding → Vector similarity search → Top-K relevant chunks retrieval
- **Generation Layer** : Context construction → LLM prompting → Response generation citing sources 
- **API Layer**: RESTful FastAPI endpoints for document management and answering questions

**Technology Stack:**
- **Backend**: FastAPI with async support
- **Vector Database**: ChromaDB for persistent embedding storage
- **Embeddings**: Sentence Transformers (all-MiniLM-L6-v2) - 384-dimensional vectors
- **LLM**: Ollama (local inference) with **Gemma2:2B**.
- **Document Processing**: PyPDF for text extraction, LangChain for chunking
- **Containerization**: Docker + Docker Compose for reproducible deployment

### System Performance

- Processes 50-page PDFs in ~30 seconds (extraction + indexing)
- Retrieves relevant chunks in <100ms via vector search
- Generates context-aware answers in 2-5 seconds
- Handles document collections of 1000+ pages efficiently
- Zero-shot learning: No training required, works with any document domain

### API Endpoints

POST   /upload                    # Upload and index PDF documents
GET    /documents                 # List all indexed documents  
DELETE /documents/{filename}      # Remove document from knowledge base
POST   /chat?query=...           # Ask questions and get answers
POST   /search?query=...         # Vector search without LLM generation

### Use Cases

- **Agricultural Research**: Query farming best practices, crop disease information, and irrigation guidelines
- **Knowledge Management**: Convert static document libraries into interactive Q&A systems
- **Decision Support**: Get quick answers from policy documents, regulations, and technical manuals
- **Educational Tools**: Create study assistants from textbooks and research papers

### Technical Highlights

- **Hybrid Context Window Management**: Balances chunk size and overlap to preserve semantic meaning across boundaries
- **Source-Grounded Responses**: LLM is constrained to answer only from provided context, preventing hallucinations
- **Scalable Architecture**: Stateless API design allows horizontal scaling for production deployments
- **Memory Efficiency**: In-memory state management without browser storage dependencies

### Project Learnings

This project demonstrates expertise in:
- **Information Retrieval**: Vector embeddings, semantic search, and similarity metrics
- **NLP Engineering**: Text preprocessing, chunking strategies, and prompt engineering
- **System Design**: Building production-ready APIs with proper error handling and validation
- **AI/ML Integration**: Combining multiple AI components (embeddings, vector DBs, LLMs) into a cohesive system

### Future Enhancements

- Multi-modal support (images, tables from PDFs)
- Conversational memory for follow-up questions
- Batch document processing
- Advanced filtering (by date, document type, custom metadata)
- Retrieval quality metrics and A/B testing framework

---

This project showcases the practical application of RAG architecture for domain-specific knowledge extraction, demonstrating how modern AI can make large document collections instantly queryable.