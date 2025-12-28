import config from "../config/config";
import {Client, Databases, ID, Query, Storage } from "appwrite";


export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
            try {
                return await this.databases.createDocuments(
                    config.appwriteDataBaseId,
                    config.appwriteCollectionId,
                    slug,
                    {
                        title,
                        content,
                        featuredImage,
                        userId,
                        status,

                    }
                )
            } catch (error) {
                throw error
            }
    }

     async updatePost(slug, {title, content, featuredImage, status}){
            try {
                return await this.databases.updateDocuments(
                    config.appwriteDataBaseId,
                    config.appwriteCollectionId,
                    slug,
                    {
                        title,
                        content,
                        featuredImage,
                        status,

                    }
                )
            } catch (error) {
                throw error
            }
    }

     async deletePost(slug){
            try {
                return await this.databases.deleteDocuments(
                    config.appwriteDataBaseId,
                    config.appwriteCollectionId,
                    slug,
                )
                return true
            } catch (error) {
                throw error
                return false
            }
    }

     async getPost(slug){
            try {
                return await this.databases.getDocuments(
                    config.appwriteDataBaseId,
                    config.appwriteCollectionId,
                    slug,
                )
                return true
            } catch (error) {
                throw error
                return false
            }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                    config.appwriteDataBaseId,
                    config.appwriteCollectionId,
                    queries,
                )
        } catch (error) {
            throw error;
            return false
        }
    }

    //file upload services

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique,
                file,
            )
        } catch (error) {
            throw error;
            return false
        }
    }

     async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId,
            )
            return true
        } catch (error) {
            throw error;
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId,
        )
    }
}
const service  = new Service()
export default service;