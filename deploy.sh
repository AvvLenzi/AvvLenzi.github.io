#!/bin/bash
ssh hosting 'rm -rf avvocatolenzi'
scp -r dist hosting:avvocatolenzi