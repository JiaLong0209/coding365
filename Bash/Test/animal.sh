#!/bin/bash

case ${1} in
    "cat")
	echo "にゃ~" ;;
    "dog")
	echo "Wang"  ;;
    *)
	echo "Usage ${0} {cat|dog}" ;;
esac
