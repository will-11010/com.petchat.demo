# 🐾 PetChat

A social network for pets — where your pet makes friends, shares adventures, and connects with other animals.

> **Status:** In development

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Java | 21 | Programming language |
| Spring Boot | 4.0.5 | Web framework |
| Thymeleaf | (managed by Spring Boot) | Server-side template engine |
| Maven | 3.9+ (wrapper included) | Build & dependency management |

## Project Structure

```
src/
├── main/
│   ├── java/com/petchat/demo/
│   │   ├── DemoApplication.java          # Application entry point
│   │   └── controller/
│   │       └── HomeController.java       # Page routes
│   └── resources/
│       ├── application.properties
│       ├── static/
│       │   ├── css/                      # Stylesheets (common + per page)
│       │   └── js/                       # JavaScript (per page)
│       └── templates/
│           ├── fragments/                # Shared navigation bar
│           │
│           ├── pages.html
└── test/
    └── java/com/petchat/demo/
        └── DemoApplicationTests.java
```

## Requirements

- **JDK 21** or higher
- **Maven 3.9+** (or use the included Maven Wrapper)

## Getting Started

### Clone the repository

```bash
git clone https://github.com/your-user/petchat.git
cd petchat/com.petchat.demo
```

### Run the application

```bash
./mvnw spring-boot:run
```

The application will start at **http://localhost:8080**.

### Build the JAR

```bash
./mvnw clean package
java -jar target/demo-0.0.1-SNAPSHOT.jar
```

### Run tests

```bash
./mvnw test
```

## Available Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/sobre` | About |
| `/contato` | Contact |
| `/cadastro` | Sign Up |
