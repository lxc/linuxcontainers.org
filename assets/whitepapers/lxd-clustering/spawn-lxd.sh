for i in $(seq -w 01 05); do
    gcloud compute instances create \
        "lxd${i}" --description="LXD cluster - member #${i}" \
        --boot-disk-size="20GB" \
        --create-disk=name="lxd${i}-zfs,size=500GB,type=pd-ssd,auto-delete=yes" \
        --machine-type="n1-highcpu-8" \
        --image-family="ubuntu-1804-lts" --image-project="ubuntu-os-cloud" \
        --zone="us-east1-b" \
        --metadata-from-file="user-data=lxd.yaml"
done
