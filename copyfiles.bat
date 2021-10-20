@echo off
xcopy /s C:\Users\HP\Desktop\Project\perzsi-auth-frontend\build\static C:\Users\HP\Desktop\Project\perzsi-auth-server\static && xcopy /s C:\Users\HP\Desktop\Project\perzsi-auth-frontend\build\index.html C:\Users\HP\Desktop\Project\perzsi-auth-server\templates
@echo 'done'