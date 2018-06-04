---
title: {{ replace .Name "-" " " | title }}
author: {{ getenv "USER" }}
date: {{ now.Format "2006-01-02" }}
draft: true
---
